// ignore_for_file: override_on_non_overriding_member

import 'package:flutter/material.dart';

class ChatDetailPageAppBar extends StatelessWidget {
  const ChatDetailPageAppBar({super.key});

  @override
  Widget build(BuildContext context) {
    return AppBar(
      elevation: 0,
      automaticallyImplyLeading: false,
      backgroundColor: Colors.white,
      flexibleSpace: SafeArea(
        child: Container(
          padding: const EdgeInsets.only(right: 16),
          child: Row(children: <Widget>[
            IconButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                icon: const Icon(
                  Icons.arrow_back,
                  color: Colors.black,
                )),
            const SizedBox(
              width: 2,
            ),
            const CircleAvatar(
              backgroundImage:
                  AssetImage("images/pexels-mohamed-abdelghaffar-771742.jpg"),
              maxRadius: 20,
            ),
            const SizedBox(
              width: 12,
            ),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: const <Widget>[
                  Text(
                    "Amt",
                    style: TextStyle(fontWeight: FontWeight.w600),
                  ),
                  SizedBox(
                    height: 4,
                  ),
                  Text(
                    "Online",
                    style: TextStyle(color: Colors.green, fontSize: 12),
                  )
                ],
              ),
            ),
            Icon(
              Icons.more_vert,
              color: Colors.grey.shade700,
            )
          ]),
        ),
      ),
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
