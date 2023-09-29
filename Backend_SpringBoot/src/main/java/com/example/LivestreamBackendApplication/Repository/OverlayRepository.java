package com.example.LivestreamBackendApplication.Repository;

import com.example.LivestreamBackendApplication.Models.Overlay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OverlayRepository extends JpaRepository<Overlay, Long> {
}
