package cocktail.user.dto;

import cocktail.user.dao.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class JoinRequestDto {
    private String email;
    private String birth;
    private String password;
    private Gender gender;
}
