import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App.tsx";
import { WagmiProvider } from "wagmi";
import { config } from "./providers/config.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Toaster } from "@/components/ui/toaster";

const root = createRoot(document.getElementById("root")!);

const queryClient = new QueryClient();

root.render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider
        modalSize="wide"
        initialChain={50002}
        theme={darkTheme({
          accentColor: "#9EF01A",
          accentColorForeground: "#0A1A1F",
          borderRadius: "large",
          fontStack: "system",
          overlayBlur: "large",
        })}
      >
        <StrictMode>
          <App />
          <Toaster />
        </StrictMode>
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
