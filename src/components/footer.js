import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, far, fab)

export default () => (
<div class="bg-dark py-5" id="contact">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 ml-auto text-white order-lg-2 mb-5">
                <h2 class="mb-4">Contact Us</h2>
                <form name="contact" netlify-honeypot="bot-field" data-netlify="true">
                    <div class="form-group d-none">
                    <label>Don’t fill this out if you're human:<input name="bot-field" /></label>
                    </div>
                    <div class="form-group">
                        <label for="Name" class="sr-only">Your Name</label>
                        <input type="text" class="form-control" id="Name" placeholder="Your Name" />
                    </div>
                    <div class="form-group">
                        <label for="Email" class="sr-only">Your Email</label>
                        <input type="email" class="form-control" id="Email" placeholder="Your Email" />
                    </div>
                    <div class="form-group">
                        <label for="Message" class="sr-only"></label>
                        <textarea type="text" class="form-control" id="Message" rows="5" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-danger">Send</button>
                </form>
            </div>
            <div class="col-lg-4 text-white order-lg-1">
                <div class="flex-column">
                    <div>
                    <span class="mr-3"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/></span>
                    <span class="mr-3"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></span>
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                    </div>
                    <p class="mt-3 pb-3 border-bottom border-white">2019 &copy; Get with the Program, Inc.</p>
                    <p class="lead">Stay up to date with the latest from Get with the Program!</p>
                    <a href="http://eepurl.com/bPGvNr" class="btn btn-danger mt-2" target="_blank" rel="noopener noreferrer">Join Our Mailing List</a>
                </div>
            </div>
        </div>
    </div>
</div>
)