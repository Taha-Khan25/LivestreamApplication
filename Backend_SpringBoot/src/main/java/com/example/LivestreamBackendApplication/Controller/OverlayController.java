package com.example.LivestreamBackendApplication.Controller;


import com.example.LivestreamBackendApplication.Models.Overlay;
import com.example.LivestreamBackendApplication.Services.OverlayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class OverlayController {
    @Autowired
    private OverlayService overlayService;

    @GetMapping("/list")
    public List<Overlay> getAllOverlays() {
        return overlayService.getAllOverlays();
    }

    @PostMapping("/create")
    public Overlay createOverlay(@RequestBody Overlay overlay) {
        return overlayService.createOverlay(overlay);
    }

    @GetMapping("/list/{id}")
    public Overlay getOverlayById(@PathVariable Long id) {
        return overlayService.getOverlayById(id);
    }

    @PutMapping("/update/{id}")
    public Overlay updateOverlay(@PathVariable Long id, @RequestBody Overlay updatedOverlay) {
        return overlayService.updateOverlay(id, updatedOverlay);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteOverlay(@PathVariable Long id) {
        overlayService.deleteOverlay(id);
        return ResponseEntity.ok().build();
    }
}