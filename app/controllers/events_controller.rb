class EventsController < ApplicationController
    def index 
        render json: Event.all
    end

    def show
        event = Event.find(params[:id])
        render json: event, status: :ok
    end

    def create 
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
        params.permit(:name, :description, :start_time, :endtime, :group_id)
    end
end
