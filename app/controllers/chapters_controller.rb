class ChaptersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Chaper.all
    end

    def show
        chapter = find_chapter
        render json: chapter
    end

    private
    
    def find_chapter
        chapter = Chapter.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Chapter not found" }, status: :not_found
    end
end
