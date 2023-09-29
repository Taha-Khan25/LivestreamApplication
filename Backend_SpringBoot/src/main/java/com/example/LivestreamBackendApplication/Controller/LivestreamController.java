/*
package com.example.LivestreamBackendApplication.Controller;

import com.example.LivestreamBackendApplication.Services.LivestreamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/livestream")
public class LivestreamController {

    @Autowired
    private LivestreamService livestreamService;

    @PostMapping("/play")
    public ResponseEntity<String> playLivestream(@RequestParam String rtspUrl) {
        livestreamService.playLivestream(rtspUrl);
        return ResponseEntity.ok("Livestream started.");
    }

    @PostMapping("/pause")
    public ResponseEntity<String> pauseLivestream() {
        livestreamService.pauseLivestream();
        return ResponseEntity.ok("Livestream paused.");
    }

    @PostMapping("/volume")
    public ResponseEntity<String> adjustVolume(@RequestParam int volume) {
        livestreamService.adjustVolume(volume);
        return ResponseEntity.ok("Volume adjusted.");
    }
}

*/
