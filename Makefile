cp:
	cp -r ./../libraries.todo247/common/dist/* .;

push:
	git add . && git commit -m "$c" && git push;
