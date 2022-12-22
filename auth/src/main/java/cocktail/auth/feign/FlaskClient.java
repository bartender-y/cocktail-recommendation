package cocktail.auth.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "flask-client", url = "http://localhost:5000")
public interface FlaskClient {

    @PostMapping(value = "/flask/drink-bti")
    String postDrinkBti(@RequestHeader("User-Id") Long userId, @RequestBody DrinkBtiRequestDto requestDto);

}
