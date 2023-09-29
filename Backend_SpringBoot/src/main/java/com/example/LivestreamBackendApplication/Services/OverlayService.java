package com.example.LivestreamBackendApplication.Services;

import com.example.LivestreamBackendApplication.Models.Overlay;
import com.example.LivestreamBackendApplication.Repository.OverlayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OverlayService {
    @Autowired
    private OverlayRepository overlayRepository;

    public List<Overlay> getAllOverlays() {
        return overlayRepository.findAll();
    }

    public Overlay createOverlay(Overlay overlay) {
        return overlayRepository.save(overlay);
    }

    public Overlay getOverlayById(Long id) {
        return overlayRepository.findById(id)
                .orElseThrow(null );
    }

    public Overlay updateOverlay(Long id, Overlay updatedOverlay) {
        Overlay existingOverlay = getOverlayById(id);
        existingOverlay.setContent(updatedOverlay.getContent());
        existingOverlay.setPositionX(updatedOverlay.getPositionX());
        existingOverlay.setPositionY(updatedOverlay.getPositionY());
        existingOverlay.setWidth(updatedOverlay.getWidth());
        existingOverlay.setHeight(updatedOverlay.getHeight());
        return overlayRepository.save(existingOverlay);
    }

    public void deleteOverlay(Long id) {
        Overlay overlay = getOverlayById(id);
        overlayRepository.delete(overlay);
    }
}