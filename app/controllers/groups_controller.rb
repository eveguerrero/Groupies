class GroupsController < ApplicationController
    def index 
        render json: Group.all
    end

    def show
        group = Group.find(params[:id])
        render json: group, status: :ok
    end

    def create 
        group = Group.create!(group_params)
        UserGroup.create!(group_id: group.id, user_id: session[:user_id])
        render json: group, status: :created 
        
    
    end

    def update
        group = Group.find(params[:id])
        group.update!(group_params)
        render json: group, status: :ok
    end

    def destroy 
        group = Group.find(params[:id])
        group.destroy
    end
    
    private 
    
    def group_params
        params.permit(:name)
    end
end
