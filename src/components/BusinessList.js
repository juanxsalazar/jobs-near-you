import React, { Component } from 'react';

class BusinessList extends Component {
state = {
    businesses: [
        {
            "id": 1,
            "name": "Suncoast Developers Guild",
            "website": "suncoast.io",
            "address": "2220 Central Ave, St. Petersburg, FL 33712",
            "about": "A code school that provides those seeking an education in software development with the technical and soft skills they need to pursue rewarding careers as programmers. ",
            "created_at": "2019-04-03T22:26:16.019Z",
            "updated_at": "2019-04-03T22:26:16.019Z"
        },
        {
            "id": 2,
            "name": "The Dog Bar",
            "website": "dogbarstpete.com",
            "address": "2300 Central Ave, St. Petersburg, FL 33712",
            "about": "A hybrid between a Doggie Day Care or private Dog Park, and a full liquor, beer, wine bar.",
            "created_at": "2019-04-03T22:27:36.051Z",
            "updated_at": "2019-04-03T22:27:36.051Z"
        },
        {
            "id": 3,
            "name": "Salon Swank",
            "website": "salonswankstpete.com",
            "address": "2253 Central Ave #103, St. Petersburg, FL 33713",
            "about": "A salon",
            "created_at": "2019-04-03T22:28:16.592Z",
            "updated_at": "2019-04-03T22:28:16.592Z"
        },
        {
            "id": 4,
            "name": "The Bikery Coffee and Bicycle Shop",
            "website": "thebikery.bike",
            "address": "2222 1st Ave S, St. Petersburg, FL 33712",
            "about": "Laid-back haunt for coffee, espresso & pastries, plus a shop selling bicycles, gear & accessories.",
            "created_at": "2019-04-03T22:28:34.712Z",
            "updated_at": "2019-04-03T22:28:34.712Z"
        },
        {
            "id": 5,
            "name": "Squeeze Juice Works",
            "website": "squeezejuiceworks.com",
            "address": "18 22nd St S, St. Petersburg, FL 33712",
            "about": "A hand-made juice product store.",
            "created_at": "2019-04-03T22:29:03.022Z",
            "updated_at": "2019-04-03T22:29:03.022Z"
        },
        {
            "id": 6,
            "name": "Democratic Party of Pinellas",
            "website": "pinellasdemocrats.org",
            "address": "2250 1st Ave N, St. Petersburg, FL 33713",
            "about": "An entity of Florida Democratic Party at the county level.",
            "created_at": "2019-04-03T22:29:16.468Z",
            "updated_at": "2019-04-03T22:29:16.468Z"
        },
        {
            "id": 7,
            "name": "Discount Food Mart",
            "website": "N/A",
            "address": "2157 Central Ave, St. Petersburg, FL 33713",
            "about": "A convenience store",
            "created_at": "2019-04-03T22:29:31.334Z",
            "updated_at": "2019-04-03T22:29:31.334Z"
        },
        {
            "id": 8,
            "name": "Haslam Book Store",
            "website": "haslams.com",
            "address": "2025 Central Ave, St. Petersburg, FL 33713",
            "about": "A book store",
            "created_at": "2019-04-03T22:29:44.377Z",
            "updated_at": "2019-04-03T22:29:44.377Z"
        },
        {
            "id": 9,
            "name": "3 Daughters Brewing",
            "website": "3dbrewing.com",
            "address": "222 22nd St S, St. Petersburg, FL 33712",
            "about": "A brewery",
            "created_at": "2019-04-03T22:29:57.261Z",
            "updated_at": "2019-04-03T22:29:57.261Z"
        },
        {
            "id": 10,
            "name": "Casita Taqueria",
            "website": "casitatacos.com",
            "address": "2663 Central Ave, St. Petersburg, FL 33713",
            "about": "Casual Mexican Restaurant",
            "created_at": "2019-04-03T22:30:12.021Z",
            "updated_at": "2019-04-03T22:30:12.021Z"
        },
        {
            "id": 11,
            "name": "LaBram Homes",
            "website": "labramhomes.com",
            "address": "2661 1st Ave S, St. Petersburg, FL 33712",
            "about": "Custom Home Builders",
            "created_at": "2019-04-03T22:30:29.338Z",
            "updated_at": "2019-04-03T22:30:29.338Z"
        },
        {
            "id": 12,
            "name": "Bringe Music Center",
            "website": "bringemusic.com",
            "address": "2129 1st Ave N, St. Petersburg, FL 33713",
            "about": "Musical instrument store",
            "created_at": "2019-04-03T22:30:39.364Z",
            "updated_at": "2019-04-03T22:30:39.364Z"
        },
        {
            "id": 13,
            "name": "Pinellas Ale Works",
            "website": "pawbeer.com",
            "address": "1962 1st Ave S, St. Petersburg, FL 33712",
            "about": "Brewery",
            "created_at": "2019-04-03T22:30:50.619Z",
            "updated_at": "2019-04-03T22:30:50.619Z"
        },
        {
            "id": 14,
            "name": "Right Around the Corner",
            "website": "stpetearcadebar.com",
            "address": "2244 Central Ave, St. Petersburg, FL 33712",
            "about": "Arcade bar",
            "created_at": "2019-04-03T22:31:02.753Z",
            "updated_at": "2019-04-03T22:31:02.753Z"
        },
        {
            "id": 15,
            "name": "Lumastream Inc.",
            "website": "lumastream.com",
            "address": "2201 1st Ave S, St. Petersburg, FL 33712",
            "about": "Provides sustainable lighting products",
            "created_at": "2019-04-03T22:31:14.223Z",
            "updated_at": "2019-04-03T22:31:14.223Z"
        },
        {
            "id": 16,
            "name": "Central Neurology",
            "website": "centralneuro.com",
            "address": "2201 Central Ave Suite 200, St. Petersburg, FL 33713",
            "about": "A neurological care practice specializing in treatment of simple and complex conditions.",
            "created_at": "2019-04-03T22:31:31.913Z",
            "updated_at": "2019-04-03T22:31:31.913Z"
        },
        {
            "id": 17,
            "name": "Spitfire Theater",
            "website": "spitfiretheater.com",
            "address": "14 18th St S, St. Petersburg, FL 33712",
            "about": "An improv theater.",
            "created_at": "2019-04-03T22:32:27.679Z",
            "updated_at": "2019-04-03T22:32:27.679Z"
        },
        {
            "id": 18,
            "name": "Vertical Ventures",
            "website": "stpete.verticalventures.com",
            "address": "116 18th St S, St. Petersburg, FL 33712",
            "about": "Rockclimbing Gym",
            "created_at": "2019-04-03T22:32:45.342Z",
            "updated_at": "2019-04-03T22:32:45.342Z"
        },
        {
            "id": 19,
            "name": "Anytime Fitness",
            "website": "anytimefitness.com",
            "address": "900 Central Ave, St. Petersburg, FL 33705",
            "about": "Gym",
            "created_at": "2019-04-03T22:32:58.256Z",
            "updated_at": "2019-04-03T22:32:58.256Z"
        },
        {
            "id": 20,
            "name": "Anytime Fitness",
            "website": "anytimefitness.com",
            "address": "3725 49th St N, St. Petersburg, FL 33710",
            "about": "Gym",
            "created_at": "2019-04-03T22:33:14.001Z",
            "updated_at": "2019-04-03T22:33:14.001Z"
        },
        {
            "id": 21,
            "name": "Anytime Fitness",
            "website": "anytimefitness.com",
            "address": "10660 Gandy Blvd N, St. Petersburg, FL 33702",
            "about": "Gym",
            "created_at": "2019-04-03T22:33:31.516Z",
            "updated_at": "2019-04-03T22:33:31.516Z"
        },
        {
            "id": 22,
            "name": "Amped Fitness",
            "website": "ampedfitness.com",
            "address": "830 3rd Ave S, St. Petersburg, FL 33701",
            "about": "Gym",
            "created_at": "2019-04-03T22:33:50.472Z",
            "updated_at": "2019-04-03T22:33:50.472Z"
        },
        {
            "id": 23,
            "name": "The Birchwood",
            "website": "thebirchwood.com",
            "address": "340 Beach Dr NE, St. Petersburg, FL 33701",
            "about": "Hotel with a restaurant and rooftop bar. Also has a ballroom for different events.",
            "created_at": "2019-04-03T22:34:49.580Z",
            "updated_at": "2019-04-03T22:34:49.580Z"
        },
        {
            "id": 24,
            "name": "Publix Super Market",
            "website": "publix.com",
            "address": "250 3rd St S, St. Petersburg, FL 33701",
            "about": "Supermarket",
            "created_at": "2019-04-03T22:35:23.668Z",
            "updated_at": "2019-04-03T22:35:23.668Z"
        },
        {
            "id": 25,
            "name": "Publix Super Market",
            "website": "publix.com",
            "address": "725 1st Ave S, St. Petersburg, FL 33701",
            "about": "Supermarket",
            "created_at": "2019-04-03T22:35:36.502Z",
            "updated_at": "2019-04-03T22:35:36.502Z"
        },
        {
            "id": 26,
            "name": "Publix Super Market",
            "website": "publix.com",
            "address": "3501 49th St N, St. Petersburg, FL 33710",
            "about": "Supermarket",
            "created_at": "2019-04-03T22:35:47.459Z",
            "updated_at": "2019-04-03T22:35:47.459Z"
        },
        {
            "id": 27,
            "name": "Publix Super Market",
            "website": "publix.com",
            "address": "10150 Brook Rd, Glen Allen, VA 23059",
            "about": "Supermarket",
            "created_at": "2019-04-03T22:36:01.860Z",
            "updated_at": "2019-04-03T22:36:01.860Z"
        },
        {
            "id": 28,
            "name": "The White House",
            "website": "whitehouse.gov",
            "address": "1600 Pennsylvania Ave NW, Washington, DC 20500",
            "about": "Federal government office.",
            "created_at": "2019-04-03T22:36:20.361Z",
            "updated_at": "2019-04-03T22:36:20.361Z"
        },
        {
            "id": 29,
            "name": "Google",
            "website": "google.com",
            "address": "1600 Amphitheatre Pkwy, Mountain View, CA 94043",
            "about": "Global headquarters of Google, an internet business",
            "created_at": "2019-04-03T22:36:35.081Z",
            "updated_at": "2019-04-03T22:36:35.081Z"
        },
        {
            "id": 30,
            "name": "Caribbean Cafe",
            "website": "caribbeancafe1.com",
            "address": "4801 Central Ave, St. Petersburg, FL 33713",
            "about": "Cafe for food and drinks",
            "created_at": "2019-04-03T22:36:47.569Z",
            "updated_at": "2019-04-03T22:36:47.569Z"
        }
    ]
}


    render() {
        return (
            <div>
              <ul>
                  {
                      this.state.businesses.map(business => 
                      <li>{business.name}</li>
                      )
                  }
            </ul>  
            </div>
        );
    }
}

export default BusinessList;