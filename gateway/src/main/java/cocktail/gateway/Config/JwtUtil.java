package cocktail.gateway.Config;

import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Base64;

@Component
@RequiredArgsConstructor
public class JwtUtil {
    private String secretKey = "test";

    @PostConstruct
    public void init(){
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String authorizeAndGetUserId(String token){
        boolean isValid = true;

        String subject = null;
        try{
            subject = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
            System.out.println("subject = " + subject);
        }catch (Exception ex){
            isValid = false;
        }

        if (subject == null || subject.isEmpty()){
            isValid = false;
        }
        if (!isValid){
            throw new RuntimeException("token is not valid");
        }
        return subject;
    }
}
