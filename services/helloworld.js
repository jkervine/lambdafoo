exports.helloWorldHandler = function(event, context) {
   console.log("starting")
   context.succeed("Hello, World!")
   console.log("ending")
}
