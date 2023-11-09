package umfrage.Application.Umfrage.PageController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HandlePageController {

    @GetMapping("/welcome")
    public String ConnectWelcomeWithSpring(){ return "frontend/HTML/opiniuspollinus"; }
    @GetMapping("/opinionpoll")
    public String ConnectOpinionPollWithSpring () {
        return "frontend/HTML/opinionpoll";
    }

    @GetMapping("/opinionoracale")
    public String ConnectOpinionOracaleWithSpring () { return "frontend/HTML/opinionoracale"; }

}
