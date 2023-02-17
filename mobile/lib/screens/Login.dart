// ignore: file_names
// ignore_for_file: prefer_const_constructors
import 'package:flut/components/Input.dart';
import 'package:flutter/material.dart';

// ignore: use_key_in_widget_constructors
class LoginScreen extends StatefulWidget {
  static const routename = "/login-screen";
  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    final usernameController = TextEditingController();
    final passwordController = TextEditingController();

    void dispose() {
      super.dispose();
      usernameController.dispose();
      passwordController.dispose();
    }

    return Scaffold(
      body: SingleChildScrollView(
          child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          // ignore: prefer_const_literals_to_create_immutables
          children: [
            SizedBox(
              height: 150,
            ),
            InputComponet(
              text: "Email",
              hintText: "Enter username",
            ),
            SizedBox(
              height: 20,
            ),
            InputComponet(
              text: "Password",
              hintText: "Enter password",
            ),
            SizedBox(
              height: 30,
            ),
            MaterialButton(
              onPressed: () {
                Navigator.of(context).pushReplacementNamed("/");
              },
              height: 45,
              color: Colors.black,
              padding: EdgeInsets.symmetric(vertical: 10, horizontal: 50),
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10)),
              child: Text(
                "Login",
                style: TextStyle(color: Colors.white),
              ),
            ),
            SizedBox(
              height: 30,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Dont have an account?",
                  style: TextStyle(color: Colors.grey, fontSize: 15),
                ),
                TextButton(
                    onPressed: () {
                      Navigator.of(context).pushReplacementNamed("/");
                    },
                    child: Text(
                      "Register",
                      style: TextStyle(
                        color: Colors.blue,
                        fontSize: 14,
                      ),
                    ))
              ],
            )
          ],
        ),
      )),
    );
  }
}
