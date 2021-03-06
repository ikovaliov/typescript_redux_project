export const API_BASE_URL = 'http://localhost:4000';

export const API_TOURNAMENTS_URL = `${API_BASE_URL}/tournaments`;

export const apiRoutes = {
  tournament: () => `${API_TOURNAMENTS_URL}`,
  tournamentList: (query: string) => `${API_TOURNAMENTS_URL}?q=${query}`,
  editTournament: (id: string) => `${API_TOURNAMENTS_URL}/${id}`
};
