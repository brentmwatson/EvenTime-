class StaticController < ApplicationController
    def home
        render layout: false, template: 'static/index.html'
    end

    def catchall
        render template: 'static/static.html'
    end
end
