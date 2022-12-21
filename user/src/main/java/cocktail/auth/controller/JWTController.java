package cocktail.auth.controller;

import cocktail.auth.dto.JoinRequestDto;
import cocktail.auth.dto.JoinResponseDto;
import cocktail.auth.dto.LoginRequestDto;
import cocktail.auth.dto.LoginResponseDto;
import cocktail.auth.jwt.JwtTokenGenerator;
import cocktail.auth.dao.User;
import cocktail.auth.service.JWTUserDetailsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@Controller
@RestController
@RequestMapping("/auth")
public class JWTController {

    private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    JWTUserDetailsService JWTUserDetailsService;
    @Autowired
    JwtTokenGenerator jwtTokenGenerator;

    @PostMapping("/join")
    public ResponseEntity join(@RequestBody JoinRequestDto joinRequestDto){
        logger.info(">>> 회원가입 시도");
        User retUser = JWTUserDetailsService.joinNewUser(joinRequestDto);
        logger.info(">>> save complete"+ retUser.toString());
        JoinResponseDto responseDto = new JoinResponseDto(retUser.getUserId());
        return ResponseEntity.ok(responseDto);
    }

    @PostMapping("/login")
    public Object login(@RequestBody LoginRequestDto loginRequestDto) {
        try{
            logger.info(">>>>> login 시도 : " + loginRequestDto.toString());
            User authUser =  JWTUserDetailsService.authenticateByEmailAndPassword(loginRequestDto.getEmail(),loginRequestDto.getPassword());
            logger.info(">>>>> authUser : " + authUser.toString());
            String token = jwtTokenGenerator.createToken(authUser.getEmail(), authUser.getRoles());
            LoginResponseDto responseDto = new LoginResponseDto(token);
            return ResponseEntity.ok(responseDto);
        }catch (Exception e){
            logger.error(">>>>> catch error");
            return ResponseEntity.status(HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/access-data")
    public String accessData(Principal principal){
        logger.info(principal.getName());
        return principal.getName();
    }

    @GetMapping("/v1/recommand-cocktail")
    public String recommandCocktail(@RequestParam String recommandInput ,Principal principal){
        logger.info(principal.getName() + "recommandation from DL server from Django");
        logger.info("recommandation info : " + recommandInput);
        return recommandInput;
    }

}
