export const getError = (error: any) => {
  // Error Network
  if (error.code === "ERR_NETWORK") {
    return "Aucune liason avec votre backend";
  }

  // User doesn't exist
  if (
    error.code === "ERR_BAD_REQUEST" &&
    error.response.data === "Cannot find user"
  ) {
    return `Vous n'êtes pas encore inscrit à l'application`;
  }

  // Incorrect user informations
  if (
    error.code === "ERR_BAD_REQUEST" &&
    error.response.data === "Incorrect password"
  ) {
    return `Email ou mot de passe incorrect`;
  }

  // Format Email invalid
  if (
    error.code === "ERR_BAD_REQUEST" &&
    error.response.data === "Email format is invalid"
  ) {
    return `Le champs adresse email n'est pas valide`;
  }

  // User already exist
  if (
    error.code === "ERR_BAD_REQUEST" &&
    error.response.data === "Email already exists"
  ) {
    return `Cette adresse email existe déjà`;
  }
};
