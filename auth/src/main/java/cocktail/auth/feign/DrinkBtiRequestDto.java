package cocktail.auth.feign;

import cocktail.auth.dto.JoinRequestDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DrinkBtiRequestDto {
    private Integer proof;
    private Integer fruity;
    private Integer colorful;

    public static DrinkBtiRequestDto createByJoinRequestDto(JoinRequestDto joinRequestDto){
        return new DrinkBtiRequestDto(joinRequestDto.getProof(), joinRequestDto.getFruity(), joinRequestDto.getColorful());
    }
}
