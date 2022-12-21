package cocktail.gateway.Config;

import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.reactive.error.ErrorWebExceptionHandler;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Component
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config> {
    @Autowired
    private JwtUtil jwtUtil;

    public AuthorizationHeaderFilter(){
        super(Config.class);
    }

    public static class Config{

    }
    @Override
    public GatewayFilter apply(AuthorizationHeaderFilter.Config config) {
        return (exchange, chain) -> {
            String token = exchange.getRequest().getHeaders().get("Authorization").get(0);//.substring(7);
            System.out.println("token = " + token);
            boolean jwtTokenValid = jwtUtil.isJwtTokenValid(token);
            System.out.println("jwtTokenValid = " + jwtTokenValid);
            Map<String, Object> userInfo = new HashMap<>();
            userInfo.put("memberId", "1");
            addAuthorizationHeaders(exchange.getRequest(), userInfo);

            return chain.filter(exchange);
        };
    }

    private void addAuthorizationHeaders(ServerHttpRequest request, Map<String, Object> userInfo) {
        request.mutate()
                .header("User-Id", userInfo.get("memberId").toString())
                .build();
    }


    @Bean
    // 예외 처리 핸들러
    public ErrorWebExceptionHandler tokenValidation(){
        return new JwtTokenExceptionHandler();
    }

    public class JwtTokenExceptionHandler implements ErrorWebExceptionHandler{
        private String getErrorCode(int errorCode){
            return "{\"errorCode\":" + errorCode + "}";
        }

        @Override
        public Mono<Void> handle(ServerWebExchange exchange, Throwable ex) {
            int errorCode = 500;
            if (ex.getClass() == NullPointerException.class){
                errorCode = 100;
            } else if (ex.getClass() == ExpiredJwtException.class){
                errorCode = 200;
            }

            byte[] bytes = getErrorCode(errorCode).getBytes(StandardCharsets.UTF_8);
            DataBuffer buffer = exchange.getResponse().bufferFactory().wrap(bytes);
            return exchange.getResponse().writeWith(Flux.just(buffer));
        }
    }

}
