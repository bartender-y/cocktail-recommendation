//package cocktail.gateway.Config;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jws;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Component;
//
//import javax.annotation.PostConstruct;
//import java.util.Base64;
//import java.util.Date;
//import java.util.List;
//
//@Component
//@RequiredArgsConstructor
//public class JwtTokenProvider {
//    private String secretKey = "cocktailrecommandation";
//
//    private long tokenValidTime  = 30*60*1000L;
//
//    @PostConstruct
//    public void init(){
//        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
//    }
//
////    public String createToken(String userPk, List<String> roles){
//////        Map<String, Object> headers = new HashMap<String, Object>();
//////        headers.put("typ", "JWT");
//////        headers.put("alg", "HS256");
////
////        Claims claims = Jwts.claims().setSubject(userPk);
////        claims.put("roles",roles);
////        Date now = new Date();
////        return Jwts.builder()
////                .setIssuer("cocktailAuthServer")
////                .setClaims(claims)
////                .setIssuedAt(now)
////                .setExpiration(new Date(now.getTime()+ tokenValidTime))
////                .signWith(SignatureAlgorithm.HS256,secretKey)
////                .compact();
////    }
//
//    public Authentication getAuthentication(String token){
//        UserDetails userDetails = null;
//                //jwtUserDetailsService.loadUserByUsername(this.getUserPk(token));
//        return new UsernamePasswordAuthenticationToken(userDetails,"",userDetails.getAuthorities());
//    }
//
//    public String getUserPk(String token){
//        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
//    }
//
//    // request에서 header에 token값을 가져옴 => front에서 header에 Token을 넣어줘야함
////    public String resolveToken(HttpServletRequest request){
////        return request.getHeader("Authorization");
////    }
//
//    public boolean validateToken(String jwtToken){
//        try{
//            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
//            return !claims.getBody().getExpiration().before(new Date());
//        } catch (Exception e) {
//            return false;
//        }
//    }
//}
