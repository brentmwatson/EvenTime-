--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: addendums; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE addendums (
    id integer NOT NULL,
    notes character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    agreement_id integer
);


--
-- Name: addendums_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE addendums_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: addendums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE addendums_id_seq OWNED BY addendums.id;


--
-- Name: addresses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE addresses (
    id integer NOT NULL,
    street character varying,
    city character varying,
    state character varying,
    zip character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    contact_id integer,
    vendor_id integer
);


--
-- Name: addresses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE addresses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: addresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE addresses_id_seq OWNED BY addresses.id;


--
-- Name: agreements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE agreements (
    id integer NOT NULL,
    document character varying,
    cost integer,
    staff character varying,
    payment_form character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: agreements_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE agreements_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: agreements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE agreements_id_seq OWNED BY agreements.id;


--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE contacts (
    id integer NOT NULL,
    f_name character varying,
    l_name character varying,
    phone_num character varying,
    role character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE contacts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE contacts_id_seq OWNED BY contacts.id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE events (
    id integer NOT NULL,
    theme character varying,
    attendance integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    user_id integer,
    date character varying,
    vendor_id integer
);


--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE events_id_seq OWNED BY events.id;


--
-- Name: milestones; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE milestones (
    id integer NOT NULL,
    date character varying,
    note character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    event_id integer,
    venue_id integer,
    vendor_id integer,
    title character varying,
    complete boolean DEFAULT false
);


--
-- Name: milestones_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE milestones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: milestones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE milestones_id_seq OWNED BY milestones.id;


--
-- Name: refile_attachments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE refile_attachments (
    id integer NOT NULL,
    oid oid NOT NULL,
    namespace character varying NOT NULL,
    created_at timestamp without time zone DEFAULT ('now'::text)::timestamp without time zone
);


--
-- Name: refile_attachments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE refile_attachments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: refile_attachments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE refile_attachments_id_seq OWNED BY refile_attachments.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE schema_migrations (
    version character varying NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE users (
    id integer NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp without time zone,
    remember_created_at timestamp without time zone,
    sign_in_count integer DEFAULT 0 NOT NULL,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    current_sign_in_ip inet,
    last_sign_in_ip inet,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    authentication_token character varying(30),
    contact_id integer
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: vendors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE vendors (
    id integer NOT NULL,
    service character varying,
    agreement_id integer,
    contact_id integer,
    address_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    milestone_id integer
);


--
-- Name: vendors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE vendors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: vendors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE vendors_id_seq OWNED BY vendors.id;


--
-- Name: venues; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE venues (
    id integer NOT NULL,
    agreement_id integer,
    vendor_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    contact_id integer
);


--
-- Name: venues_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE venues_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: venues_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE venues_id_seq OWNED BY venues.id;


--
-- Name: addendums id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY addendums ALTER COLUMN id SET DEFAULT nextval('addendums_id_seq'::regclass);


--
-- Name: addresses id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY addresses ALTER COLUMN id SET DEFAULT nextval('addresses_id_seq'::regclass);


--
-- Name: agreements id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY agreements ALTER COLUMN id SET DEFAULT nextval('agreements_id_seq'::regclass);


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY contacts ALTER COLUMN id SET DEFAULT nextval('contacts_id_seq'::regclass);


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY events ALTER COLUMN id SET DEFAULT nextval('events_id_seq'::regclass);


--
-- Name: milestones id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY milestones ALTER COLUMN id SET DEFAULT nextval('milestones_id_seq'::regclass);


--
-- Name: refile_attachments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY refile_attachments ALTER COLUMN id SET DEFAULT nextval('refile_attachments_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Name: vendors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY vendors ALTER COLUMN id SET DEFAULT nextval('vendors_id_seq'::regclass);


--
-- Name: venues id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY venues ALTER COLUMN id SET DEFAULT nextval('venues_id_seq'::regclass);


--
-- Name: addendums addendums_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY addendums
    ADD CONSTRAINT addendums_pkey PRIMARY KEY (id);


--
-- Name: addresses addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);


--
-- Name: agreements agreements_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY agreements
    ADD CONSTRAINT agreements_pkey PRIMARY KEY (id);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: milestones milestones_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY milestones
    ADD CONSTRAINT milestones_pkey PRIMARY KEY (id);


--
-- Name: refile_attachments refile_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY refile_attachments
    ADD CONSTRAINT refile_attachments_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: vendors vendors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY vendors
    ADD CONSTRAINT vendors_pkey PRIMARY KEY (id);


--
-- Name: venues venues_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY venues
    ADD CONSTRAINT venues_pkey PRIMARY KEY (id);


--
-- Name: index_addendums_on_agreement_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_addendums_on_agreement_id ON addendums USING btree (agreement_id);


--
-- Name: index_addresses_on_contact_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_addresses_on_contact_id ON addresses USING btree (contact_id);


--
-- Name: index_addresses_on_vendor_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_addresses_on_vendor_id ON addresses USING btree (vendor_id);


--
-- Name: index_events_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_events_on_user_id ON events USING btree (user_id);


--
-- Name: index_events_on_vendor_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_events_on_vendor_id ON events USING btree (vendor_id);


--
-- Name: index_milestones_on_event_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_milestones_on_event_id ON milestones USING btree (event_id);


--
-- Name: index_milestones_on_vendor_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_milestones_on_vendor_id ON milestones USING btree (vendor_id);


--
-- Name: index_milestones_on_venue_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_milestones_on_venue_id ON milestones USING btree (venue_id);


--
-- Name: index_refile_attachments_on_namespace; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_refile_attachments_on_namespace ON refile_attachments USING btree (namespace);


--
-- Name: index_refile_attachments_on_oid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_refile_attachments_on_oid ON refile_attachments USING btree (oid);


--
-- Name: index_users_on_authentication_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_authentication_token ON users USING btree (authentication_token);


--
-- Name: index_users_on_contact_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_users_on_contact_id ON users USING btree (contact_id);


--
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_email ON users USING btree (email);


--
-- Name: index_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_reset_password_token ON users USING btree (reset_password_token);


--
-- Name: index_vendors_on_address_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_vendors_on_address_id ON vendors USING btree (address_id);


--
-- Name: index_vendors_on_agreement_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_vendors_on_agreement_id ON vendors USING btree (agreement_id);


--
-- Name: index_vendors_on_contact_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_vendors_on_contact_id ON vendors USING btree (contact_id);


--
-- Name: index_vendors_on_milestone_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_vendors_on_milestone_id ON vendors USING btree (milestone_id);


--
-- Name: index_venues_on_agreement_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_venues_on_agreement_id ON venues USING btree (agreement_id);


--
-- Name: index_venues_on_contact_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_venues_on_contact_id ON venues USING btree (contact_id);


--
-- Name: index_venues_on_vendor_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_venues_on_vendor_id ON venues USING btree (vendor_id);


--
-- Name: events fk_rails_0cb5590091; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY events
    ADD CONSTRAINT fk_rails_0cb5590091 FOREIGN KEY (user_id) REFERENCES users(id);


--
-- Name: users fk_rails_183544a5de; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fk_rails_183544a5de FOREIGN KEY (contact_id) REFERENCES contacts(id);


--
-- Name: vendors fk_rails_21da0462b1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY vendors
    ADD CONSTRAINT fk_rails_21da0462b1 FOREIGN KEY (milestone_id) REFERENCES milestones(id);


--
-- Name: milestones fk_rails_309f980052; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY milestones
    ADD CONSTRAINT fk_rails_309f980052 FOREIGN KEY (venue_id) REFERENCES venues(id);


--
-- Name: milestones fk_rails_51b0896111; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY milestones
    ADD CONSTRAINT fk_rails_51b0896111 FOREIGN KEY (vendor_id) REFERENCES vendors(id);


--
-- Name: addresses fk_rails_67e9674de3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY addresses
    ADD CONSTRAINT fk_rails_67e9674de3 FOREIGN KEY (contact_id) REFERENCES contacts(id);


--
-- Name: venues fk_rails_ac8a7fe6e8; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY venues
    ADD CONSTRAINT fk_rails_ac8a7fe6e8 FOREIGN KEY (contact_id) REFERENCES contacts(id);


--
-- Name: events fk_rails_aea2356705; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY events
    ADD CONSTRAINT fk_rails_aea2356705 FOREIGN KEY (vendor_id) REFERENCES vendors(id);


--
-- Name: vendors fk_rails_b5ec0f31eb; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY vendors
    ADD CONSTRAINT fk_rails_b5ec0f31eb FOREIGN KEY (agreement_id) REFERENCES agreements(id);


--
-- Name: vendors fk_rails_bc4c7a340a; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY vendors
    ADD CONSTRAINT fk_rails_bc4c7a340a FOREIGN KEY (contact_id) REFERENCES contacts(id);


--
-- Name: addendums fk_rails_cdd7608198; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY addendums
    ADD CONSTRAINT fk_rails_cdd7608198 FOREIGN KEY (agreement_id) REFERENCES agreements(id);


--
-- Name: vendors fk_rails_ec5c065c00; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY vendors
    ADD CONSTRAINT fk_rails_ec5c065c00 FOREIGN KEY (address_id) REFERENCES addresses(id);


--
-- Name: milestones fk_rails_f82bbe8cc2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY milestones
    ADD CONSTRAINT fk_rails_f82bbe8cc2 FOREIGN KEY (event_id) REFERENCES events(id);


--
-- Name: addresses fk_rails_f9a1888511; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY addresses
    ADD CONSTRAINT fk_rails_f9a1888511 FOREIGN KEY (vendor_id) REFERENCES vendors(id);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO schema_migrations (version) VALUES ('20161128202355'), ('20161129153801'), ('20161129204636'), ('20161130170744'), ('20161130172732'), ('20161130175547'), ('20161130184341'), ('20161130193650'), ('20161130195334'), ('20161130200423'), ('20161130202406'), ('20161130213031'), ('20161130222450'), ('20161130224243'), ('20161201155144'), ('20161207185111'), ('20161207205503'), ('20161208203228'), ('20161208203516'), ('20161212151529'), ('20161214203414'), ('20161215174457');


