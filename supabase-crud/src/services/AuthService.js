import supabase from "../config/supabase";

export async function login(email, senha) {
  try {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      return {
        error: true,
        message: error.message,
      };
    }

    return {
      user: data.user,
    };
  } catch (error) {
    console.log(error.message);
    return {
      error: true,
      message: "Erro ao fazer o login",
    };
  }
}

export async function register({email, senha}) {
      try {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      return {
        error: true,
        message: error.message,
      };
    }

    return {
      user: data.user,
    };
  } catch (error) {
    console.log(error.message);
    return {
      error: true,
      message: "Erro ao fazer o cadastro",
    };
  }
}