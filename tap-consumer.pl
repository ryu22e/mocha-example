#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use TAP::Parser;
binmode STDIN, ":utf8";
binmode STDOUT, ":utf8";

my $source = '';
while (<STDIN>) {
    $source .= $_;
}

my $parser = TAP::Parser->new( { source => $source } );
my $ok_count = my $not_ok_count = 0;
while ( my $result = $parser->next ) {
    if ($result->is_ok) {
        $ok_count++;
    } else {
        $not_ok_count++;
    }
}
print "ok: $ok_count\n";
print "not ok: $not_ok_count\n";
