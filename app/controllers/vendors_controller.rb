class VendorsController < ApplicationController
  before_action :require_user
  before_action :find_event_vendors, only: [:show, :update, :destroy]
  before_action :find_event, only: [:create]
  def index # GET    /api/vendors
      # when user clicks* can see all avaible vendors from db => vendor#index
      @vendor = current_user.vendors.all
      render :json => @vendor
  end

  def show # GET    /api/vendor/:id
      # when user clicks* can see one vendor
      render :json => @vendor
  end


  def create # POST   /api/vendors
    # PATCH user#update???
    # when user clicks* add vendor to event => event#update
    # when user clicks* add vendor it's added to vendors list
    @vendor = Vendor.create(vendor_params)
    @event.vendors << @vendor
    # when user clicks* add vendor it's added to event => event#update
    @vendor.address = Address.new(address_params)
    @vendor.contact = Contact.new(contact_params)

    if @event.save
        render :json => @event, :status => 201
    else
        render :json => "Unable to create event items", :status => 422
    end
  end


  def update # PATCH/PUT  /api/vendors/:id
    if @vendor.update(vendor_params)
      render :json => @vendor, :status => 201
    else
      render :json => "Unable to update vendor", :status => 422
    end
  end


  def destroy # DELETE /api/vendors/:id
    @vendor.destroy
    render :json => "Vendor deleted successfully", :status => 200
  end

  private

    def find_event
        @event = current_user.events.find(params[:event_id])
    end

    def find_event_vendors
      @vendor = current_user.events.vendors.find(params[:id])
    end

    def find_milestone
      @milestone = current_user.milestones.find(params[:milestone_id])
    end

    def vendor_params
      params.permit(:service)
    end

    def address_params
      params.require(:address).permit(:street, :city, :state, :zip)
    end

    def contact_params
      params.require(:contact).permit(:f_name, :l_name, :phone_num, :role)
    end


    # def find_event
    #     @vendor = current_user.events.find(params[:event_id])
    # end
    #
    # def find_milestone
    #     @vendor = current_user.milestones.find(params[:id])
    # end
end
