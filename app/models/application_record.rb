class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end

# For calling the attachment feature on models
# class User < ActiveRecord::Base
#   attachment :profile_image
# end
