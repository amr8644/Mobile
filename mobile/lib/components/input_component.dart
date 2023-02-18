import 'package:flutter/material.dart';

class InputComponet extends StatelessWidget {
  final String text;
  final String hintText;

  const InputComponet({
    Key? key,
    required this.text,
    required this.hintText,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        height: 50,
        child: TextField(
            cursorColor: Colors.black,
            decoration: InputDecoration(
                labelText: text,
                hintText: hintText,
                hintStyle: const TextStyle(color: Colors.grey, fontSize: 14),
                labelStyle: const TextStyle(
                  color: Colors.black,
                  fontSize: 14,
                  fontWeight: FontWeight.w400,
                ),
                enabledBorder: OutlineInputBorder(
                    borderSide: const BorderSide(color: Colors.black, width: 2),
                    borderRadius: BorderRadius.circular(10)),
                floatingLabelStyle:
                    const TextStyle(color: Colors.black, fontSize: 18),
                focusedBorder: OutlineInputBorder(
                    borderSide:
                        const BorderSide(color: Colors.black, width: 1.5),
                    borderRadius: BorderRadius.circular(10)))));
  }
}
