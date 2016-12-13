class Milestone < ApplicationRecord
    belongs_to :vendor
    belongs_to :event

    # receive
    # :questions
    # 14 booleans

    # return
    # milestones titles and dates

    def self.question(questions)
        collection = questions.each_with_index.map do |ans, index|
            if ans && index == 0

                output = {title: "book venue", date: 3.weeks.ago.to_datetime}
            elsif index == 0
                output = [{title: "start venue search", date: 5.weeks.ago.to_datetime},
                 {title: "schedule venue tours", date: 4.weeks.ago.to_datetime},
                 {title: "book venue", date: 3.weeks.ago.to_datetime}]
            end

            if ans && index == 1
                output = [{title: "book caterer", date: 2.weeks.ago.to_datetime},
                {title: "Finalize meal plan for reception", date: 2.weeks.ago.to_datetime},
                {title: "Book a walk through with caterer and venue", date: 2.weeks.ago.to_datetime}]
            elsif index == 1
                output = [{title: "Research caterers", date: 2.weeks.ago.to_datetime},
                 {title: "Book Caterers", date: 2.weeks.ago.to_datetime},
                 {title: "Finalize meal plan for reception with your caterer", date: 2.weeks.ago.to_datetime}]
            end

            if ans && index == 2
                output = [{title: "research ceremony site", date: 2.weeks.ago.to_datetime},
                {title: "research officiants", date: 2.weeks.ago.to_datetime},
                {title: "schedule ceremony site", date: 2.weeks.ago.to_datetime},
                {title: "book your ceremony officiant", date: 2.weeks.ago.to_datetime},
                {title: "book your ceremony site", date: 2.weeks.ago.to_datetime},
                {title: "plan your ceremony timeline", date: 2.weeks.ago.to_datetime},
                {title: "print your ceremony", date: 2.weeks.ago.to_datetime},
                {title: "Book your ceremony musician", date: 2.weeks.ago.to_datetime}]
            elsif index == 2
                output = []
            end

            if ans && index == 3
                output = [{title: "research restaurants", date: 2.weeks.ago.to_datetime},
                        {title: "book restaurants", date: 2.weeks.ago.to_datetime}]
            elsif index == 3
                output = []
            end

            if ans && index == 4
                output = [{title: "Order food for cocktail hour", date: 2.weeks.ago.to_datetime},
                {title: "Make bar arrangements", date: 2.weeks.ago.to_datetime},
                {title: "Make arrangements for music", date: 2.weeks.ago.to_datetime}]
            elsif index == 4
                output = []
            end

            if ans && index == 5
                output = [{title: "Research to have a bar through the venue or cater", date: 2.weeks.ago.to_datetime},
                {title: "Finalize bar package", date: 2.weeks.ago.to_datetime}]
            elsif index == 5
                output = []
            end

            if ans && index == 6
                output = [{title: "book florist", date: 2.weeks.ago.to_datetime}]
            elsif index == 6
                output = [{title: "research florist", date: 2.weeks.ago.to_datetime}, {title: "book florist", date: 2.weeks.ago.to_datetime}]
            end

            if ans && index == 7
                output = [{title: "book photographer", date: 2.weeks.ago.to_datetime}]
            elsif index == 7
                output = [{title: "research photographer", date: 2.weeks.ago.to_datetime},{title: "book photographer", date: 2.weeks.ago.to_datetime}]
            end

            if ans && index == 8
                output = [{title: "book videoographer", date: 2.weeks.ago.to_datetime}]
            elsif index == 8
                output = [{title: "research videographer", date: 2.weeks.ago.to_datetime},{title: "book videographer", date: 2.weeks.ago.to_datetime}]
            end

            if ans && index == 9
                output = [{title: "book cake person", date: 2.weeks.ago.to_datetime}]
            elsif index == 9
                output = [{title: "research cake wanted", date: 2.weeks.ago.to_datetime},{title: "book cake person", date: 2.weeks.ago.to_datetime}]
            end

            if ans && index == 10
                output = [{title: "Research DJ", date: 2.weeks.ago.to_datetime},
                    {title: "Book DJ", date: 2.weeks.ago.to_datetime},
                    {title: "Have a walk through with DJ and venue", date: 2.weeks.ago.to_datetime}]
            elsif index == 10
                output = []
            end

            if ans && index == 11
                output = [{title: "Research band", date: 2.weeks.ago.to_datetime},
                    {title: "book band", date: 2.weeks.ago.to_datetime},
                    {title: "have a walk through with band and venue", date: 2.weeks.ago.to_datetime}]
            elsif index == 11
                output = []
            end

            if ans && index == 12
                output = [{title: "Look for hotels near the venue", date: 2.weeks.ago.to_datetime},
                    {title: "block out hotels for guests", date: 2.weeks.ago.to_datetime}]
            elsif index == 12
                output = []
            end

            if ans && index == 12
                output = [{title: "make arrangements for your dessert bar", date: 2.weeks.ago.to_datetime},
                    {title: "make arrangements for your candy bar", date: 2.weeks.ago.to_datetime}]
            elsif index == 12
                output = []
            end
            #
            # datetime = Time.now.to_datetime
            # output.date = date.to_datetime
            #
            # created_at >= some_day_with_00:00:00 timestamp and create_at < some_day_plus_one_with_00:00:00 timestamp
            #
            #
            # if date == datetime.to_date.past?
            #     date
            # else
            #
            # datetime.today? # => true
            # datetime.to_date.past? # => false (only based on date)
            # datetime.to_date.future? # => false  (only based on date)
            #
            # datetime.to_date == Date.tomorrow # => false
            # datetime.to_date == Date.yesterday # => false
            #
            # end

            output

        end
        #converts to array of hash
        collection.compact.flatten.uniq

        # #make date not past the created_at date
    end
end
