class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound,with: :render_not_found



  wrap_parameters format: []


    def index
      users = User.all
      render json: users
    end

    def create
      user = User.create!(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    #GET /me
    def show
      if session[:user_id]
        render json: User.find(session[:user_id]), status: :created  
      else
        render json: {error: "Not logged in"}, status: :unauthorized
      end
    end

  def  user_by_id
    user = User.find(params[:id])
    render json: user, status: :ok
  end

  def update
    user = User.find(session[:user_id])
      user.update!(user_update_params)
      render json: user
  end
    
  def destroy
    user = User.find(session[:user_id])
    user.reviews.update_all(user_id:nil)
    user.destroy
    session.delete :user_id
    head :no_content
  end

  private

  def user_params
      params.permit(:username, :password, :password_confirmation, :name, :image, :bio)
  end

  def user_update_params
    params.permit(:name, :bio, :image)
  end
  def render_unprocessable_entity invalid
    render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
  end

  def render_not_found
    render json: {error: "User not found"}, status: 404
  end
end
