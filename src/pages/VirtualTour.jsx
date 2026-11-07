import React, { useEffect, useRef, useState } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/virtual-tour-plugin/index.css";
import "@photo-sphere-viewer/markers-plugin/index.css";

export default function VirtualTour() {
  const viewerRef = useRef(null);
  const viewerInstance = useRef(null);
  const tourPluginRef = useRef(null);
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const tourNodes = [
    {
      id: "hotel",
      panorama: "/hotel/Full-Hotel-view-from-the-top.jpg",
      name: "The Hotel",
      links: [
        { nodeId: "pool", position: { yaw: "90deg", pitch: "0deg" } },
        { nodeId: "deluxe", position: { yaw: "-90deg", pitch: "0deg" } },
      ],
    },
    {
      id: "pool",
      panorama: "/hotel/Pool-view-during-day-2.jpg",
      name: "Poolside",
      markers: [
        {
          id: "info-pool",
          position: { yaw: "0deg", pitch: "0deg" },
          html: '<div class="tour-marker">💧</div>',
          tooltip: "Pool Details",
          anchor: "bottom center",
        },
      ],
      links: [
        { nodeId: "hotel", position: { yaw: "-90deg", pitch: "0deg" } },
        { nodeId: "suite", position: { yaw: "90deg", pitch: "0deg" } },
      ],
    },
    {
      id: "deluxe",
      panorama: "/hotel/Deluxe-bedroom-view-3.jpg",
      name: "Deluxe Room",
      links: [
        { nodeId: "hotel", position: { yaw: "180deg", pitch: "0deg" } },
        { nodeId: "bathroom", position: { yaw: "45deg", pitch: "0deg" } },
      ],
    },
    {
      id: "suite",
      panorama: "/hotel/King-suit-view-4.jpg",
      name: "King Suite",
      links: [
        { nodeId: "pool", position: { yaw: "-90deg", pitch: "0deg" } },
        { nodeId: "presidential", position: { yaw: "90deg", pitch: "0deg" } },
      ],
    },
    {
      id: "bathroom",
      panorama: "/hotel/display-bathroom.jpg",
      name: "Bathroom",
      links: [
        { nodeId: "deluxe", position: { yaw: "-135deg", pitch: "0deg" } },
      ],
    },
    {
      id: "presidential",
      panorama: "/hotel/Presidential-Suite-bed-2-view.jpg",
      name: "Presidential Suite",
      links: [
        { nodeId: "suite", position: { yaw: "-90deg", pitch: "0deg" } },
        { nodeId: "night", position: { yaw: "90deg", pitch: "0deg" } },
      ],
    },
    {
      id: "night",
      panorama: "/hotel/Full-Hotel-night-view-from-the-top.jpg",
      name: "Hotel at Night",
      links: [
        { nodeId: "presidential", position: { yaw: "-90deg", pitch: "0deg" } },
        { nodeId: "hotel", position: { yaw: "180deg", pitch: "0deg" } },
      ],
    },
  ];

  useEffect(() => {
    if (!viewerRef.current) return;

    try {
      viewerInstance.current = new Viewer({
        container: viewerRef.current,
        defaultYaw: 0,
        defaultPitch: 0,
        defaultZoomLvl: 50,
        minFov: 30,
        maxFov: 100,

        // Prevents looking too far up or down
        minPitch: -0.5,
        maxPitch: 0.5,

        navbar: ["zoom", "fullscreen", "caption"],
        plugins: [
          MarkersPlugin.withConfig({ markers: [] }),
          VirtualTourPlugin.withConfig({
            positionMode: "manual",
            renderMode: "2d",
            nodes: tourNodes,
            startNodeId: "hotel",
          }),
        ],
      });

      tourPluginRef.current =
        viewerInstance.current.getPlugin(VirtualTourPlugin);

      tourPluginRef.current.addEventListener("node-changed", ({ node }) => {
        const index = tourNodes.findIndex((n) => n.id === node.id);
        if (index !== -1) setCurrentNodeIndex(index);
      });

      const markersPlugin = viewerInstance.current.getPlugin(MarkersPlugin);
      markersPlugin.addEventListener("select-marker", ({ marker }) => {
        if (marker.id === "info-pool")
          alert(
            "The outdoor pool is open from 7 AM to 9 PM. Towels are provided.",
          );
      });

      setIsReady(true);
    } catch (error) {
      console.error("360 Viewer crashed:", error);
    }

    return () => {
      if (viewerInstance.current) {
        viewerInstance.current.destroy();
        viewerInstance.current = null;
      }
      tourPluginRef.current = null;
      setIsReady(false);
    };
  }, []);

  const handlePrev = () => {
    if (!isReady || !tourPluginRef.current) return;
    const prevIndex =
      (currentNodeIndex - 1 + tourNodes.length) % tourNodes.length;
    tourPluginRef.current.setCurrentNode(tourNodes[prevIndex].id);
  };

  const handleNext = () => {
    if (!isReady || !tourPluginRef.current) return;
    const nextIndex = (currentNodeIndex + 1) % tourNodes.length;
    tourPluginRef.current.setCurrentNode(tourNodes[nextIndex].id);
  };

  return (
    <div style={{ position: "relative" }}>
      <style>{`
        /* CHANGED: Made the empty background a soft grey instead of black */
        .psv-container {
          background-color: #e9e4da !important; 
        }

        .psv-navbar { background: rgba(21, 21, 19, 0.85) !important; backdrop-filter: blur(10px); border-bottom: 1px solid rgba(224, 201, 159, 0.2); }
        .psv-button { color: #e0c99f !important; }
        .psv-button:hover { background: rgba(224, 201, 159, 0.1) !important; }
        .psv-caption { color: #e0c99f !important; font-family: 'Italiana', serif; }
        
        .tour-marker {
          background: #e0c99f; color: #211d16; width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-size: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5); cursor: pointer; transition: transform 0.2s;
        }
        .tour-marker:hover { transform: scale(1.1); }

        .custom-tour-btn {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 10;
          background: rgba(21, 21, 19, 0.7); border: 1px solid rgba(224, 201, 159, 0.4);
          color: #e0c99f; width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; backdrop-filter: blur(4px); transition: all 0.2s ease;
        }
        .custom-tour-btn:hover { background: rgba(224, 201, 159, 0.9); color: #211d16; border-color: #e0c99f; }
        .custom-tour-btn.prev { left: 20px; }
        .custom-tour-btn.next { right: 20px; }

        .psv-virtual-tour-link, .psv-virtual-tour-arrow { display: none !important; }
      `}</style>

      <button
        className="custom-tour-btn prev"
        onClick={handlePrev}
        aria-label="Previous room"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        className="custom-tour-btn next"
        onClick={handleNext}
        aria-label="Next room"
      >
        <ChevronRight size={28} />
      </button>

      <div
        ref={viewerRef}
        style={{
          width: "100%",
          height: "600px",
          borderRadius: "28px",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
