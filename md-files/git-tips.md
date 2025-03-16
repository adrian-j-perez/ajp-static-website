# Git Tips
*listing out some help tip to using in the git commands*

https://git-scm.com/doc - documentation of git


## Local brach name to upstream branch


```bash
git push --set-upstream origin remote-branch-name
```
when the current working local branch name is different to the remote branch name that you what to push to. Use this command to set your local upstream to the remote branch name 


https://git-scm.com/docs/git-push#_configuration
TODO: add more detail what i had to do, such as changing the upstream config  will i have to change the push.default 

what lead me to this https://stackoverflow.com/questions/24864700/fatal-the-upstream-branch-of-your-current-branch-does-not-match-the-name-of-you

