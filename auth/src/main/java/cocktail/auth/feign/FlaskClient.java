package cocktail.auth.feign;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "flask-client", url = "${flask.url}")
public interface FlaskClient {

    @PostMapping(value = "/flask/drink-bti")
    String postDrinkBti(@RequestHeader("User-Id") Long userId, @RequestBody DrinkBtiRequestDto requestDto);

}
