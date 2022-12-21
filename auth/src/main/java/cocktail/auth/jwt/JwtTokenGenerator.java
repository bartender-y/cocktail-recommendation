package cocktail.auth.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtTokenGenerator {
    private String secretKey = "test";
    private long tokenValidTime  = 30*60*1000L;

    @PostConstruct
    public void init(){
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(Long userId, List<String> roles){
        Claims claims = Jwts.claims().setSubject(String.valueOf(userId));
        claims.put("roles",roles);
        Date now = new Date();
        return Jwts.builder()
                .setIssuer("cocktailAuthServer")
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime()+ tokenValidTime))
                .signWith(SignatureAlgorithm.HS256,secretKey)
                .compact();
    }

}
