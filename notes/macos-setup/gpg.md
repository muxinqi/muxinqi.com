---
sidebar_position: 6
---

# GPG

Sign commit with GPG



## Install GPG

```shell
brew install gnupg
```



## Import GPG Key

```shell
gpg --import private.key
```


## List keys

```shell
gpg --list-keys

# Output
/Users/muxinqi/.gnupg/pubring.kbx
---------------------------------
pub   rsa4096 2020-12-25 [SC] [expires: 2024-12-25]
ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN
uid           [ unknown] muxinqi <hi@muxinqi.com>
uid           [ unknown] muxinqi <hi@mxq.im>
sub   rsa4096 2020-12-25 [E] [expires: 2024-12-25]
sub   rsa4096 2021-03-20 [S] [expires: 2024-12-25]
```



## Set trust level

```shell
gpg --edit-key ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN

> trust
> 5 # Ultimate
> y # Confirm
> q # Quit
```

Restart `gpg-agent`
```shell
gpgconf --kill gpg-agent
```

Check trust level
```shell
gpg --list-keys

/Users/muxinqi/.gnupg/pubring.kbx
---------------------------------
pub   rsa4096 2020-12-25 [SC] [expires: 2024-12-25]
ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN
uid           [ultimate] muxinqi <hi@muxinqi.com>
uid           [ultimate] muxinqi <hi@mxq.im>
sub   rsa4096 2020-12-25 [E] [expires: 2024-12-25]
sub   rsa4096 2021-03-20 [S] [expires: 2024-12-25]
```



## Sign commit with the key

```shell
git config --global user.signingkey ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN
git config --global gpg.program $(which gpg)
```

Add the following line to the end of `~/.zshrc`
```shell
export GPG_TTY=$(tty)
```

Now, close and re-open the terminal, could sign commit with:
```shell
git commit -S -m "signed commit"
```



## Sign commits automatically

```shell
git config --global commit.gpgsign true
```

To avoid having to re-enter the password after a certain period of time, using `pinentry-mac` to solve this problem
```shell
brew install pinentry-mac
echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
```

Restart gpg-agent
```shell
gpgconf --kill gpg-agent
```
