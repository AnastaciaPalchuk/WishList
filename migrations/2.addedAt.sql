start transaction;

alter table wishlist
ADD column addedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

commit;