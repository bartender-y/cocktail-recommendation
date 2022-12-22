package cocktail.auth.dto;

import cocktail.auth.dao.Gender;
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
    private Integer proof;
    private Integer fruity;
    private Integer colorful;
}
