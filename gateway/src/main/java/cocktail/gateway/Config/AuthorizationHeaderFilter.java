package cocktail.gateway.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.stereotype.Component;

@Component
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config> {
//    @Autowired
//    private JwtUtil jwtUtil;

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
            return chain.filter(exchange);
        };
    }
}
