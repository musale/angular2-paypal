# angular2-paypal
An angular 2 app that demonstrates the use of online payment service paypal [Paypal](https://www.paypal.com) using the BUY NOW payment option

### how to start
the project is created using angular-cli

- clone the project
- serve the files
- visit localhost:4200/

###### the problem for me was getting the form to perform a submit in angular 2 template invoking the action url
 I did this in the template

```<form #form class="form-inline" name="_xclick" action="https://www.paypal.com/cgi-bin/webscr" method="post">
         <input type="hidden" name="cmd" value="_xclick">
         <input type="hidden" name="business" value="mmusale93@gmail.com">
         <input type="hidden" name="currency_code" value="USD">
         <input type="hidden" name="item_name" value="Paypal demo charge">
         <input name="item_number" type="hidden" value="0001"/>
         <input type="text" class="form-control" size="30" id="paypalAmount" name="amount"/>
         <input type="hidden" name="return" value="https://localhost:4200/" />
         <input type="hidden" name="cancel_return" value="https://localhost:4200/" />
         <input type="hidden" name="custom" value={{title}}>
         <!--pass your notification URL-->
         <input name="notify_url" value="YOUR NOTIFICATION URL" type="hidden">
         <br/>
         <br/>
         <input (click)="form.submit()" type="image" src="https://www.paypal.com/en_US/i/btn/btn_buynow_LG.gif" border="0"
                name="submit" alt="Make payments with PayPal - it's fast, free and secure!"/>
</form>```

I set the `#form` then in the `submit button` I did `form.submit()` invoking the `action` url
