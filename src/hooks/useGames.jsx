import { useMutation, useQuery } from "@tanstack/react-query";
import GameService from "../services/GamesService";

const gameService = new GameService();

export function useGames() {
  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["games"],
    queryFn: gameService.getAllGames.bind(gameService),
  });

  return { games, isLoading, error };
}

export function useImoonGames() {
  const {
    data: imoonGames,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["imoonGames"],
    queryFn: gameService.getAllImoonGames.bind(gameService),
  });

  return { imoonGames, isLoading, error };
}

export function useVimPlayGames() {
  const {
    data: vimPlayGames,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["vimPlayGames"],
    queryFn: gameService.getVmPlayGames.bind(gameService),
  });

  return { vimPlayGames, isLoading, error };
}

export function useGetElbetGames() {
  const {
    data: elbetGames,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["elbetGames"],
    queryFn: gameService.getElbetGames.bind(gameService),
  });

  return { elbetGames, isLoading, error };
}

export function useLaunchSportGame() {
  const {
    mutate: launchSport,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: gameService.launchSportGame.bind(gameService),
  });

  return { launchSport, isLoading, error };
}

export function useGameSession() {
  const {
    mutate: launchGame,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: gameService.generateGameSession.bind(gameService),
  });

  return { launchGame, isLoading, error };
}

export function useLaunchImoonGame() {
  const {
    mutate: launchImoonGames,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: gameService.launchImoonGame.bind(gameService),
  });

  return { launchImoonGames, isLoading, error };
}

export function useLaunchVimplayGames() {
  const {
    mutate: LaunchVimPlay,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: gameService.launchVimplayGame.bind(gameService),
  });

  return { LaunchVimPlay, isLoading, error };
}

export function useLaunchElbetGame() {
  const {
    mutate: launchElbetGames,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: gameService.launchElbet.bind(gameService),
  });

  return { launchElbetGames, isLoading, error };
}
