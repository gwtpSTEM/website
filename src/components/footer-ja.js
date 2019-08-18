import React from "react"

export default () => (
<div class="bg-dark py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 ml-auto text-white order-lg-2 mb-5">
                <h2 class="mb-4" id="sscontact">お問い合わせ</h2>
                <form name="contact" netlify-honeypot="bot-field" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div class="form-group d-none">
                    <label>何も記入しないでください:<input name="bot-field" /></label>
                    </div>
                    <div class="form-group">
                        <label for="Name" class="sr-only">お名前</label>
                        <input type="text" class="form-control" name="Name" placeholder="お名前" />
                    </div>
                    <div class="form-group">
                        <label for="Email" class="sr-only">メールアドレス</label>
                        <input type="email" class="form-control" name="Email" placeholder="メールアドレス" />
                    </div>
                    <div class="form-group">
                        <label for="Message" class="sr-only">メッセージ</label>
                        <textarea type="text" class="form-control" name="Message" rows="5" placeholder="メッセージ"></textarea>
                    </div>
                    <button type="submit" class="btn btn-danger">送信</button>
                </form>
            </div>
            <div class="col-lg-4 text-white order-lg-1">
                <div class="flex-column">
                    {/* <div class="social">
                        <a href="https://www.facebook.com/gwtpSTEM" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook Page"><i class="fab fa-facebook fa-2x mr-3"></i></a>
                        <a href="https://twitter.com/gwtpstem" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter"><i class="fab fa-twitter fa-2x mr-3"></i></a>
                        <a href="https://www.instagram.com/gwtpstem/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram"><i class="fab fa-instagram fa-2x"></i></a>
                    </div>
                    <p class="lead mt-3">Stay up to date with the latest from Get with the Program!</p>
                    <a href="http://eepurl.com/bPGvNr" class="btn btn-danger mt-2 mb-3" target="_blank" rel="noopener noreferrer">Join Our Mailing List</a> */}
                    <p class="mt-3">2019 &copy; Get with the Program, Inc.</p>
                    <p class="pt-3 border-top border-white">Website designed and developed with <span class="fas fa-heart"></span><br />by Arisa Williams</p>
                </div>
            </div>
        </div>
    </div>
</div>
)