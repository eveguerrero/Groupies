class EventsController < ApplicationController
    def index 
        render json: Event.all
    end

    def find_by_group_id
        render json: Event.where(group_id: params[:id]), status: :ok
    end

    def show
        event = Event.find(params[:id])
        render json: event, status: :ok
    end
    def create 
        p event_params
        p '*'*50
        
        event = Event.create!(event_params)
        render json: event, status: :created 
        
    
    end

    def update
        event = Event.find(params[:id])
        event.update!(event_params)
        render json: event, status: :ok
    end

    def destroy 
        event = Event.find(params[:id])
        event.destroy
    end
    
    private 
    
    def event_params
        p params
        params.permit(:title, :description, :start, :end, :group_id, :image)
    end
end
