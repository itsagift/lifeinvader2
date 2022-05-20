class PostsController < ApplicationController

  def index
    @posts = Post.all
    return render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end
end
