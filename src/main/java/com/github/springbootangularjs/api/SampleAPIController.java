package com.github.springbootangularjs.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleAPIController {

  @RequestMapping("/api")
  public String index() {
    return "Greetings from Madhukar";
  }
}
