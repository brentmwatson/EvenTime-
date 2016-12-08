class Milestone < ApplicationRecord
    # receive
    # :questions
    # 14 booleans
    #
    # return
    # milestones titles and dates
    def self.question(questions)
        collection = questions.each_with_index.map do |ans, index|
            if ans && index == 0
                {title: "book venue", date: 3.weeks.ago}
            elsif index == 0
                [{title: "start venue search", date: 5.weeks.ago},
                 {title: "schedule venue tours", date: 4.weeks.ago},
                 {title: "book venue", date: 3.weeks.ago}]
            end
            if ans && index == 1
                [{title: "book caterer", date: 2.weeks.ago},
                {title: "Finalize meal plan for reception", date: 2.weeks.ago},
                {title: "Book a walk through with caterer and venue", date: 2.weeks.ago}]
            elsif index == 1
                [{title: "Research caterers", date: 2.weeks.ago},
                 {title: "Book Caterers", date: 2.weeks.ago},
                 {title: "Finalize meal plan for reception with your caterer", date: 2.weeks.ago}]
            end
            Rails.logger.info(questions)
            Rails.logger.info(question)
            # {title: "This title2", date: 2.weeks.ago} if ans && index == 1
            # {title: "This title3", date: 2.weeks.ago} if ans && index == 2
            # {title: "This title4", date: 2.weeks.ago} if ans && index == 3
            # {title: "This title", date: 2.weeks.ago} if ans && index == 4
            # {title: "This title", date: 2.weeks.ago} if ans && index == 5
            # {title: "This title", date: 2.weeks.ago} if ans && index == 6
            # {title: "This title", date: 2.weeks.ago} if ans && index == 7
            # {title: "This title", date: 2.weeks.ago} if ans && index == 8
            # {title: "This title", date: 2.weeks.ago} if ans && index == 9
            # {title: "This title", date: 2.weeks.ago} if ans && index == 10
        end
        #converts to array of hash
        collection.compact.flatten.uniq
    end
end
