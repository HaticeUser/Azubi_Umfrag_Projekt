package umfrage.Application.Umfrage.PageController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class HandlePageController {



    @GetMapping("/Site")
    public String ConnectWelcomeWithBackend(){
        return "frontEnd/HTML/Welcome";
    }
    @GetMapping("/HTML/Opinion_Poll.html")
    public String ConnectOpinionPollWithSpring (){
        return "frontEnd/HTML/Opinion_Poll";

    }

}
