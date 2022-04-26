class CommentsController < ApplicationController
    def index 
        render json: Comment.all
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment, status: :ok
    end

    def create 
        comment = Comment.create!(comment_params)
        render json: comment, status: :created 
        
    # rescue ActiveRecord::RecordInvalid => e
    #     render json: {errors:e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def update
        comment = Comment.find(params[:id])
        comment.update!(comment_params)
        render json: comment, status: :ok
    end

    def destroy 
        comment = Comment.find(params[:id])
        comment.destroy
    end
    
    private 
    
    def comment_params
        params.permit(:text, :post_id, :user_id)
    end
end
