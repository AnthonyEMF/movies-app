import React from "react";
import "../global.css";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  //nowPlayingAction(); // Prueba para mostrar la respuesta de la API en consola

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar style="dark"/>
    </QueryClientProvider>
  );
};

export default RootLayout;
