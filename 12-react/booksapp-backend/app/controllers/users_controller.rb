class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  # { username: "johann", password: "learnlovecode"}
  # I AM CREATING A User
  # THERE SIGNUP
  def create
    user = User.new(username: params[:username], password: params[:password])
    if user.save
      token = encode_token({ user_id: user.id})
      render json: {user: user, jwt: token}
    else
    end
  end

  def me
    if @user
      render json: { user: @user, books: @user.books}
    else
      render json: { message: "Error"}
    end

  end
end
