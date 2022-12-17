package cocktail.user.service;


import cocktail.user.dao.User;
import cocktail.user.dto.JoinRequestDto;
import cocktail.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JWTUserDetailsService implements UserDetailsService {
    @Autowired PasswordEncoder passwordEncoder;
    @Autowired UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new UsernameNotFoundException(email));
        return user;
    }

    public User authenticateByEmailAndPassword(String email, String password){
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new UsernameNotFoundException(email));
        if(!passwordEncoder.matches(password,user.getPassword())){
            throw new BadCredentialsException("Password not Matching!");
        }
        return user;
    }

    public User joinNewUser(JoinRequestDto dto){
        String encodedPassword = passwordEncoder.encode(dto.getPassword());
        List<String> roles = new ArrayList<>(List.of("USER"));
        User user = User.builder().email(dto.getEmail()).birth(dto.getBirth())
                .gender(dto.getGender()).password(encodedPassword)
                .roles(roles).build();
        User retUser = userRepository.save(user);
        return retUser;
    }

}
