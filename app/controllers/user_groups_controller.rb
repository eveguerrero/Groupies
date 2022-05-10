class UserGroupsController < ApplicationController
    def index 
        render json: UserGroup.all
    end

    def show
        user_group = UserGroup.find(params[:id])
        render json: user_group, status: :ok
    end

    def create 
        user_group = UserGroup.create!(group_params)
        render json: user_group, status: :created 
        
    
    end

    def update
        user_group = UserGroup.find(params[:id])
        user_group.update!(group_params)
        render json: user_group, status: :ok
    end

    def destroy 
        user_group = UserGroup.find(params[:id])
        user_group.destroy
    end
    
    private 
    
    def group_params
        params.permit(:group_id, :user_id)
    end
end
